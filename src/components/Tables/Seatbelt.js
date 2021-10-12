import React, {useState, useEffect} from 'react'
import { MDBDataTable } from 'mdbreact';
import { readString } from 'react-papaparse';
import seatbeltCSV from "../../data/seat_belt_wearing_rate.csv";

function Seatbelt() {

    const column = [
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
    ];

    const row = [
        {
            location: 'All occupants',
            malaysia: '48.4',
            japan: '94.9/89.5',
        },
        {
            location: 'Drivers only',
            malaysia: '82.9',
            japan: '99.5/98.5',
        },
        {
            location: 'Front seat',
            malaysia: '73.8',
            japan: '98/94.9',
        },
        {
            location: 'Rear seat',
            malaysia: '9.6',
            japan: '71.8/36',
        },
    ];
    
    const [datatable, setDatatable] = useState({
        columns: column,
        rows: row,
    });

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