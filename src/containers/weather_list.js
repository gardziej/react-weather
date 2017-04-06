import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import CustomGoogleMap from '../components/google_map';

class WeatherList extends React.Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather=>weather.main.temp);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><CustomGoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="orange" units="&#8451;"/></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        )
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Miasto</th>
                        <th>Temperatura (&#8451;)</th>
                        <th>Ciśnienie (hPa)</th>
                        <th>Wilgotność (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
