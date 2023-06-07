import {Chart} from 'react-google-charts';

import './App.css';

export const data = [
    ['Материк', 'Площадь'],
    ['Евразия', 53.89],
    ['Африка', 30.25],
    ['Северная Америка', 24.2],
    ['Южная Америка', 17.82],
    ['Антарктида', 13.66],
    ['Австралия', 7.69],
];

export const options = {
    title: 'Площадь материков',
};

function App() {
    return (
        <div className = "App">
            <Chart
                chartType = "PieChart"
                data = {data}
                options = {options}
                width = {'100%'}
                height = {'600px'}
            />
        </div>
    );
}

export default App;