import DisplayForWork from './DisplayForWork'
export default function SelectedWorksDisplay({selectedWorks}) {
  return (
  	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 px-5 lg:px-20 mt-32">
      {selectedWorks.map((data,index)=>(
        <DisplayForWork key={data._id} work={data} />    
      ))}
    </div>
  )
}
