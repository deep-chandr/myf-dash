import React, { Component } from 'react';
import './dashboard.scss';
import Alert from 'react-bootstrap/Alert';

var Chart = require('chart.js');


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount = () => {
        var ctx = document.getElementById('myChart');
        const options = {
            legend : {
                position : 'bottom',
                labels: {
                    fontColor: 'black',
                    fontFamily: "Averin",
                    usePointStyle	 : true,
                    padding : 20
                }
            }
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        };
        const _colors =  ['','','','','',''].map((item) => getRandomColor());
        const data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: _colors,
                borderColor: ['grey','grey','grey','grey','grey','grey'],
                borderWidth: 1
            }]
        };
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
    }


    render() {
        return <div className="dashboard-wrapper">
            <div className="dashboard-body">
                <div className="user-intro">
                    <h3>Welcome, Priyanka</h3>
                </div>
                <div className="section1-wrapper">
                    <div className="tripstats-wrapper">
                        <div className="tripstats-header">
                            <h4>Trip Stats</h4>

                            <div className='filter'>
                                {
                                    ['Today', 'Week', 'Month', 'Custom'].map((item, i) => {
                                        return <button key={item} type="button" className="btn btn-light">{item}</button>
                                    })
                                }
                            </div>
                        </div>
                        <div className="tripstats-body">
                            {['Total Bookings', 'Manager Approval', 'Vendor Unassigned', 'Driver Unassigned', 'Dispatched',
                                'Cab Arrived', 'Start Trip Live', 'End Trip', 'Close Duty', 'Bill Approval', 'Invoice Generations',
                                'Cancelled', 'SOS(emergency)', 'View More'].map((item, i) => {
                                    return <div className="card"
                                    // style="width: 18rem;"
                                    >
                                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                                        <div className="card-body">
                                            <h3 className="header-number">100</h3>
                                            <h7 className="card-title header-text">{item}</h7>
                                            {/* <p className="card-text">Some quick example text to build on the card title and make
                                         up the bulk of the card's content.</p> */}
                                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                            <div className="progress header-progress" style={{ height: ".2rem" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%", backgroundColor : getRandomColor() }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>;
                                })}
                        </div>

                    </div>
                </div>
                <div className="section2-wrapper">

                    <div className="bookingstat-wrapper section2-common">
                        <div className="bookingstat-body">
                            <h4>Booking Stats</h4>
                            <div className="card">
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="bookingstat-chart">
                                    <canvas id="myChart" width="400" height="400"></canvas>
                                </div>
                                {/* <div className="card-body">
                                    <h5 className="card-title">booking stats</h5>
                                    <p className="card-text">Ahoy! Stop staring at me.</p>
                                    <a href="#" className="btn btn-primary">Ninja world</a>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="livemonitoring-wrapper section2-common">

                        <div className="livemonitoring-body">
                            <h4>Live Monitoring</h4>
                            <div className="card" >
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Live Monitoring</h5>
                                    <p className="card-text">Ahoy! Stop staring at me.</p>
                                    <a href="#" className="btn btn-primary">Ninja world</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="section3-wrapper">
                    <h4>Vehicle Overspeeding Stats</h4>
                    <div className="section3-body">


                        {['Total Speed Violation', 'Resolved Speed Violation', 'Pending Speed Violation'].map((item, i) => {
                            return <div className="card">
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body content">
                                    <div className="icon">
                                        <i className="fa fa-cloud"></i>
                                    </div>
                                    <div className="content-data">
                                        <h3>100</h3>
                                        <p>{item}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>

                </div>

                <div className="section4-wrapper">
                    {/* <h4>Table stats</h4> */}
                    <div className="section4-body">
                        <div className='card'>

                            <table className="table">
                                <thead>
                                    <tr>
                                        {['Speed Graph',
                                            'TRN',
                                            'Vendor',
                                            'Traveller',
                                            'Driver',
                                            'Car No.',
                                            'Date & Time',
                                            'Action'].map((item, i) => {
                                                return <th scope="col">{item}</th>
                                            })}

                                        {/* <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ['', '', '', '', '', '', '', ''].map((item, i) => {
                                            return <tr>
                                                {[' ', 'AB002', 'Chinku', 'Pinku', 'Sofia', 'UP 00007', '12th Nov 89', 'Resolve'].map((item, i) => {
                                                    return <td>{item}</td>;
                                                })}
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Dashboard;