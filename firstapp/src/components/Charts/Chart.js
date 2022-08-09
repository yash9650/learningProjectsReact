import './Chart.css'
import ChartBar from './ChartBar'


function Chart(props){
    const dataPointsValue = props.dataPointers.map(dataPointer => dataPointer.value);
    const maxdataPointsValue = Math.max(...dataPointsValue);
    return <div className='chart'>
        {props.dataPointers.map(datapointer => <ChartBar 
        key = {datapointer.label}
        value={datapointer.value}
        maxValue = {maxdataPointsValue} 
        label ={datapointer.label}
        />
        )}
    </div>
}

export default Chart;