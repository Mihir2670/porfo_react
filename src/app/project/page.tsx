export default function Project(){
 return(
  <>
  <h1 className="flex justify-center mt-10 font-mono text-4xl font-semibold underline decoration-solid">Projects</h1>
        <table className="min-w-full border border-gray-300  mt-12">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">Sr. No.</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Project Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">1</td>
              <td className="px-4 py-2 border border-gray-300">Calculator</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">2</td>
              <td className="px-4 py-2 border border-gray-300">Tic-Tac-Toe game</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">3</td>
              <td className="px-4 py-2 border border-gray-300">Income-Expense-Tracker</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">4</td>
              <td className="px-4 py-2 border border-gray-300">Hotel Management System</td>
            </tr>
          </tbody>
        </table>
</>
 )
}