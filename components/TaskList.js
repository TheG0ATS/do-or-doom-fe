
export default function TaskList({ taskData }) {

    console.log(taskData)

    // function manageShowTable(props) {
  
    //   if (props.data.length == 0) {
    //     return <h2 className="m-4 font-semibold"> No Tasks Currently Available</h2>
    //   }
    //   else {
    //     return displayTable(props)
    //   }
    // }
  
    // function displayTable(props) {
  
    //   function getLocationSales(location) {
    //     return (
    //       <tr key={location.location}>
    //         <td className=" border-black border-2 ">{location.location}</td>
    //         {location.hourlySales.map((sale, index) => <td key={index} className=" border-black border-2 ">{sale}</td>)}
    //         <td className=" border-black border-2 ">{location.dailyTotal}</td>
    //       </tr>
    //     )
    //   }
  
    //   const timesTable = props.times.map(time => <td key={time}>{time}</td>)
  
    //   const data = props.data.map(location =>
    //     getLocationSales(location)
    //   )
  
    //   const totals = props.times.map((time, index) =>
    //     <td key={time} className=" border-black border-2 ">{getTotals(index, props)}</td>
    //   )
  
  
    //   return (
    //     <section className=' text-center mb-10'>
    //       <table className="mx-auto bg-emerald-300" >
    //         <thead className=" bg-emerald-500 px-3 py-1">
    //           <tr>
    //             <td>Location</td>
    //             {timesTable}
    //             <td>Totals</td>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {data}
    //         </tbody>
    //         <tfoot className=" bg-emerald-500 px-3 py-1">
    //           <tr>
    //             <td className=" border-black border-2 ">Totals</td>
    //           </tr>
    //         </tfoot>
    //       </table>
    //     </section>
    //   )
    // }
    // return (
    //   <div className=" text-center">
    //     {manageShowTable(props)}
    //   </div>
    // )
  }