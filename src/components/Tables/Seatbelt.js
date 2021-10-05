import React, {useState, useEffect} from 'react'
import { MDBDataTable } from 'mdbreact';
import { readString } from 'react-papaparse';
import seatbeltCSV from "../../data/seat_belt_wearing_rate.csv";

function Seatbelt() {
    
    const [seatbeltData, setSeatbeltData] = useState({});

    // table data
    const [datatable, setDatatable] = useState({
        columns: [
            {
                label: 'Seat Belt Wearing Rate',
                field: 'location',
                width: 150,
                attributes:{
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                }
            },
            {
                label: 'Malaysia',
                field: 'malaysia',
                width: 150,
            },
            {
                label: 'Japan',
                field: 'japan',
                width: 150,
            }
        ],
        rows: [
            {
                location: 'Front seat',
                malaysia: '73.8',
                japan: '94.9'
            }
            // need further mapping to the real data
        ]
    })

    // to set PapaParse configuration
    const seatbeltConfig = {
        header: true,
        download: true,
        complete: (result, file) => {
            console.log(result.data);
            setSeatbeltData(result.data);
        },
        error: (error, file)=>{
            console.log('Error: ', error, file);
        },
    };

    // to push seatbeltData to table
    const addData = () => {
        const locations = 'Rear seat';
        const msia = '102';
        const jp = '201';
        const obj = {'location': locations, 'malaysia':msia, 'japan':jp};

        setDatatable({rows: [...datatable.rows, obj]});

        console.log(datatable.rows);
    }

    useEffect(() => {
        readString(seatbeltCSV, seatbeltConfig);
        addData();
        // console.log(datatable.rows[0].location); // return 'Front seat'
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