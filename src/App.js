import React from 'react'
import DistrictsMap from './districts_map.svg'
import {SvgLoader, SvgProxy} from 'react-svgmt'



export default function App() {
  
  const districtData = [{district: '#AL-01', color: 'lightpink'},{district: '#AL-02', color: 'lightgreen'}, {district: '#AL-03', color: 'lightpink'},
  {district: '#AL-04', color: 'lightyellow'}, {district: '#AL-05', color: 'lightblue'}, {district: '#AL-06', color: 'lightgreen'}, {district: '#AL-07', color: 'lightpink'}];

  console.log(districtData[1].district);
  return (
    <div>
      <SvgLoader path={DistrictsMap}>
        {districtData.map((info) =>(
            <SvgProxy key={info.district} selector={info.district} fill={info.color} />
        ))}
      </SvgLoader>
    </div>
  )
}


