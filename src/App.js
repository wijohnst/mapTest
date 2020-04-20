import React from 'react'
import DistrictsMap from './districts_map.svg'
import {SvgLoader, SvgProxy} from 'react-svgmt'



export default function App() {
  
  const districtData = [{district: 'AL-01', rate: 5  },{district: 'AL-02', rate: 10}, {district: 'AL-03', rate: 20},
  {district: 'AL-04', rate: 30}, {district: 'AL-05', rate: 40}, {district: 'AL-06', rate: 50},{district: 'AL-07', rate: 60},{district: 'AZ-01', rate: 70 },{district: 'AZ-02', rate: 80 },{district: 'AZ-03', rate: 90 },{district: 'AZ-04', rate: 100},{district: 'AZ-05', rate: 10 },{district: 'AZ-06', rate: 20},{district: 'AZ-07', rate: 30},{district: 'AZ-08', rate: 40},{district: 'AZ-09', rate: 50}];

  console.log(districtData[1].district);

  const genColor = (percentage) =>{
    
    if(percentage <= 0 ){
      return '#cccccc'
    }else if(percentage > 0 && percentage <= 10){
      return '#FFE6E6'
    }else if(percentage > 10 && percentage <= 20){
      return '#FCCDCD'
    }else if(percentage > 20 && percentage <= 30){
      return '#FDBBBB'
    }else if(percentage > 30 && percentage <= 40){
      return '#FFAAAA'
    }else if(percentage > 40 && percentage <= 50){
      return '#FD9797'
    }else if(percentage > 50 && percentage <= 60){
      return '#FA7878'
    }else if(percentage > 60 && percentage <= 80){ //Remeber to refactor with additonal color for values 60 - 70
      return '#FC5959'
    }else if(percentage > 80 && percentage <= 90){
      return '#F72f2f'
    }else if(percentage > 90 && percentage <= 100){
      return '#E61212'
    }
    else{
      return '#cccccc'
    }
  }
  return (
    <div>
      <SvgLoader path={DistrictsMap}>
        {districtData.map((info) =>(
            <SvgProxy key={`#${info.district}`} selector={`#${info.district}`} fill={genColor(info.rate)} />
        ))}
      </SvgLoader>
    </div>
  )
}


