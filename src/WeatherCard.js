import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './App.css';

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class WeatherCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dayOne: {
                day: "flurbsday",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Rain",
                temp: 0,
                minTemp: 12,
                maxTemp: 18,
                windSpeed: 9,
                cardID: 0,
                error: null
            },
            dayTwo: {
                day: "flurbsday",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Sunshine",
                temp: 0,
                minTemp: 12,
                maxTemp: 18,
                windSpeed: 9,
                cardID: 1,
                error: null
            },
            dayThree: {
                day: "flurbsday",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Pie",
                temp: 0,
                minTemp: 12,
                maxTemp: 18,
                windSpeed: 9,
                cardID: 2,
                error: null
            },
            dayFour: {
                day: "flurbsday",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Sausages",
                temp: 0,
                minTemp: 12,
                maxTemp: 18,
                windSpeed: 9,
                cardID: 2,
                error: null
            },
            dayFive: {
                day: "flurbsday",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Meow",
                temp: 0,
                minTemp: 12,
                maxTemp: 18,
                windSpeed: 9,
                cardID: 2,
                error: null
            }
        }
        this.setDay = this.setDay.bind(this)
    }

    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }

    }

    setDay(prevState) {
        this.setState(prevState => ({
            dayOne: {
                ...prevState.dayOne,
                day: "Monday"
            }
        }))
    }



    componentDidMount() {
        this.setState({
            dayOne: {
                day: "Loading...",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Rain",
                minTemp: 0,
                maxTemp: 0,
                windSpeed: 0,
                cardID: 0,
                iconURL: "",
                error: null
            },
            dayTwo: {
                day: "Loading...",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Rain",
                minTemp: 0,
                maxTemp: 0,
                windSpeed: 0,
                cardID: 0,
                iconURL: "",
                error: null
            },
            dayThree: {
                day: "Loading...",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Rain",
                minTemp: 0,
                maxTemp: 0,
                windSpeed: 0,
                cardID: 0,
                iconURL: "",
                error: null
            },
            dayFour: {
                day: "Loading...",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Rain",
                minTemp: 0,
                maxTemp: 0,
                windSpeed: 0,
                cardID: 0,
                iconURL: "",
                error: null
            },
            dayFive: {
                day: "Loading...",
                date: Date.now(),
                location: "Sheffield, UK",
                summary: "Rain",
                minTemp: 0,
                maxTemp: 0,
                windSpeed: 0,
                cardID: 0,
                iconURL: "",
                error: null
            }
        })

        // https://api.openweathermap.org/data/2.5/forecast?id=2638077&appid=bbfd9b5ddd0e169121aa37421a01f230
        // https://api.quotable.io/random
        fetch("https://api.openweathermap.org/data/2.5/forecast?id=2638077&units=metric&appid=bbfd9b5ddd0e169121aa37421a01f230")
            .then(this.status)
            .then(res => res.json())
            .then(
                (result) => {
                    let dateCalc = new Date(result.list[0].dt_txt)
                    let dayOne = days[dateCalc.getDay()]
                    let dateCalcTwo = new Date(result.list[8].dt_txt)
                    let dayTwo = days[dateCalcTwo.getDay()]
                    let dateCalcThree = new Date(result.list[16].dt_txt)
                    let dayThree = days[dateCalcThree.getDay()]
                    let dateCalcFour = new Date(result.list[24].dt_txt)
                    let dayFour = days[dateCalcFour.getDay()]
                    let dateCalcFive = new Date(result.list[32].dt_txt)
                    let dayFive = days[dateCalcFive.getDay()]

                    let dateNoTimeOne = new Date(result.list[0].dt_txt)
                    let dateNoTimeOneResult = dateNoTimeOne.toDateString()
                    let dateNoTimeTwo = new Date(result.list[8].dt_txt)
                    let dateNoTimeTwoResult = dateNoTimeTwo.toDateString()
                    let dateNoTimeThree = new Date(result.list[16].dt_txt)
                    let dateNoTimeThreeResult = dateNoTimeThree.toDateString()
                    let dateNoTimeFour = new Date(result.list[24].dt_txt)
                    let dateNoTimeFourResult = dateNoTimeFour.toDateString()
                    let dateNoTimeFive = new Date(result.list[32].dt_txt)
                    let dateNoTimeFiveResult = dateNoTimeFive.toDateString()

                    this.setState(prevState => ({
                        dayOne: {
                            ...prevState.dayOne,
                            day: dayOne,
                            date: dateNoTimeOneResult,
                            location: "Sheffield, UK",
                            summary: result.list[0].weather[0].main,
                            temp: Math.round(result.list[0].main.temp),
                            minTemp: Math.round(result.list[0].main.temp_min),
                            maxTemp: Math.round(result.list[0].main.temp_max),
                            windSpeed: Math.round(result.list[0].wind.speed),
                            iconURL: `http://openweathermap.org/img/wn/${result.list[0].weather[0].icon}@2x.png`,
                            cardID: 0,
                            error: null
                        },
                        dayTwo: {
                            ...prevState.dayTwo,
                            day: dayTwo,
                            date: dateNoTimeTwoResult,
                            location: "Sheffield, UK",
                            summary: result.list[8].weather[0].main,
                            temp: Math.round(result.list[8].main.temp),
                            minTemp: Math.round(result.list[8].main.temp_min),
                            maxTemp: Math.round(result.list[8].main.temp_max),
                            windSpeed: Math.round(result.list[8].wind.speed),
                            iconURL: `http://openweathermap.org/img/wn/${result.list[8].weather[0].icon}@2x.png`,
                            cardID: 1,
                            error: null
                        },
                        dayThree: {
                            ...prevState.dayThree,
                            day: dayThree,
                            date: dateNoTimeThreeResult,
                            location: "Sheffield, UK",
                            summary: result.list[16].weather[0].main,
                            temp: Math.round(result.list[16].main.temp),
                            minTemp: Math.round(result.list[16].main.temp_min),
                            maxTemp: Math.round(result.list[16].main.temp_max),
                            windSpeed: Math.round(result.list[16].wind.speed),
                            iconURL: `http://openweathermap.org/img/wn/${result.list[16].weather[0].icon}@2x.png`,
                            cardID: 2,
                            error: null
                        },
                        dayFour: {
                            ...prevState.dayFour,
                            day: dayFour,
                            date: dateNoTimeFourResult,
                            location: "Sheffield, UK",
                            summary: result.list[24].weather[0].main,
                            temp: Math.round(result.list[24].main.temp),
                            minTemp: Math.round(result.list[24].main.temp_min),
                            maxTemp: Math.round(result.list[24].main.temp_max),
                            windSpeed: Math.round(result.list[24].wind.speed),
                            iconURL: `http://openweathermap.org/img/wn/${result.list[24].weather[0].icon}@2x.png`,
                            cardID: 3,
                            error: null
                        },
                        dayFive: {
                            ...prevState.dayFive,
                            day: dayFive,
                            date: dateNoTimeFiveResult,
                            location: "Sheffield, UK",
                            summary: result.list[32].weather[0].main,
                            temp: Math.round(result.list[32].main.temp),
                            minTemp: Math.round(result.list[32].main.temp_min),
                            maxTemp: Math.round(result.list[32].main.temp_max),
                            windSpeed: Math.round(result.list[32].wind.speed),
                            iconURL: `http://openweathermap.org/img/wn/${result.list[32].weather[0].icon}@2x.png`,
                            cardID: 4,
                            error: null
                        }
                    }));
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
            console.log(this.state.dayOne.iconURL)
    }

    render() {
        return (
            <>
            <Container fluid className="text-center">
            <h1>Forecasting the Weather</h1>
            <br></br>
            </Container>
            
                <Container fluid>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h1>{this.state.dayOne.temp} °C</h1></Card.Title>
                                    <img src={this.state.dayOne.iconURL} alt="A simple weather icon for this day's weather."/>
                                    <p>{this.state.dayOne.date}</p>
                                    <p>{this.state.dayOne.location}</p>
                                    <p>{this.state.dayOne.summary}</p>
                                    <p>{this.state.dayOne.minTemp} - {this.state.dayOne.maxTemp} °C</p>
                                    <p>Wind Speed: {this.state.dayOne.windSpeed} m/s</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h1>{this.state.dayTwo.temp} °C</h1></Card.Title>
                                    <img src={this.state.dayTwo.iconURL}  alt="A simple weather icon for this day's weather."/>
                                    <p>{this.state.dayTwo.date}</p>
                                    <p>{this.state.dayTwo.location}</p>
                                    <p>{this.state.dayTwo.summary}</p>
                                    <p>{this.state.dayTwo.minTemp} - {this.state.dayTwo.maxTemp} °C</p>
                                    <p>Wind Speed: {this.state.dayTwo.windSpeed} m/s</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h1>{this.state.dayThree.temp} °C</h1></Card.Title>
                                    <img src={this.state.dayThree.iconURL}  alt="A simple weather icon for this day's weather."/>
                                    <p>{this.state.dayThree.date}</p>
                                    <p>{this.state.dayThree.location}</p>
                                    <p>{this.state.dayThree.summary}</p>
                                    <p>{this.state.dayThree.minTemp} - {this.state.dayThree.maxTemp} °C</p>
                                    <p>Wind Speed: {this.state.dayThree.windSpeed} m/s</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h1>{this.state.dayFour.temp} °C</h1></Card.Title>
                                    <img src={this.state.dayFour.iconURL}  alt="A simple weather icon for this day's weather."/>
                                    <p>{this.state.dayFour.date}</p>
                                    <p>{this.state.dayFour.location}</p>
                                    <p>{this.state.dayFour.summary}</p>
                                    <p>{this.state.dayFour.minTemp} - {this.state.dayFour.maxTemp} °C</p>
                                    <p>Wind Speed: {this.state.dayFour.windSpeed} m/s</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h1>{this.state.dayFive.temp} °C</h1></Card.Title>
                                    <img src={this.state.dayFive.iconURL}  alt="A simple weather icon for this day's weather."/>
                                    <p>{this.state.dayFive.date}</p>
                                    <p>{this.state.dayFive.location}</p>
                                    <p>{this.state.dayFive.summary}</p>
                                    <p>{this.state.dayFive.minTemp} - {this.state.dayFive.maxTemp} °C</p>
                                    <p>Wind Speed: {this.state.dayFive.windSpeed} m/s</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );

    }

}

export default WeatherCard;