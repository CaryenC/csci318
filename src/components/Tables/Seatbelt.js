import React, {useState, useEffect} from 'react'
import { MDBDataTable } from 'mdbreact';
import { readString } from 'react-papaparse';
import seatbeltCSV from "../../data/seat_belt_wearing_rate.csv";

function Seatbelt() {

    // table data
    const [datatable, setDatatable] = useState({
        columns: [
            {
                label: 'Seat Belt Wearing Rate',
                field: 'location',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Malaysia',
                field: 'malaysia',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Japan',
                field: 'japan',
                sort: 'asc',
                width: 150
            }
        ],
        rows: []
    });
    
    useEffect(() => {
        console.log("Inside first useEffect...");
        const seatbeltConfig = {
            header: true,
            download: true,
            complete: (result, file) => {
                console.log('Complete: ', result);
                // Malaysia
                var a = result.data[95][" All occupants"];
                var b = result.data[95][" Drivers only"];
                var c = result.data[95][" Front seat"];
                var d = result.data[95][" Rear seat"];

                // Japan
                var e = result.data[78][" All occupants"];
                var f = result.data[78][" Drivers only"];
                var g = result.data[78][" Front seat"];
                var h = result.data[78][" Rear seat"];

                const locations = ['All occupants', 'Drivers only', 'Front seat', 'Rear seat'];
                const msiaData = [a, b, c, d];
                const japanData = [e, f, g, h];

                for(let i = 0; i < locations.length; i++){
                    const obj = {'location': locations[i], 'malaysia':msiaData[i], 'japan':japanData[i]};
                    datatable.rows[i] = obj;
                    console.log(datatable.rows[i]);
                    setDatatable(datatable.rows[i]);
                }
            },
            error: (error, file) => {
                console.log('Error: ', error, file);
            },
        };
        console.log("Processing seatbeltConfig object...");
        console.log(seatbeltConfig);
        console.log("Reading string of seatbeltCSV and seatbeltConfig...");
        readString(seatbeltCSV, seatbeltConfig);
        console.log("Done reading string of seatbeltCSV and seatbeltConfig...");
      }, [])

      return (
        <div>
            <MDBDataTable 
                responsiveMd 
                bordered 
                hover
                data={datatable} />
        </div>
    )
}

export default Seatbelt