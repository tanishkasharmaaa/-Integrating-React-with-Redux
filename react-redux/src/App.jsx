/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from './redux/actionTypes'
import { Td,Table,Tr,Th,Tbody,Thead,TableContainer} from '@chakra-ui/react'
import { Pagination } from './components/Pagination'

function App() {
  const dispatch=useDispatch()
  const {isLoading,isError,footballMatches}=useSelector((store)=>store.football)
  const[totalpage,setTotalPages]=useState(1)
  const[currentPage,setCurrentPage]=useState(1)
 const getData=async()=>{
  dispatch({type:DATA_REQUEST})
try {
  const res=await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?page=${currentPage}`)
 
  setTotalPages(res.data.total_pages)
  setCurrentPage(res.data.page)
 dispatch({type:DATA_SUCCESS,payload:res.data.data})

} catch (error) {
  console.log(error)
  dispatch({type:DATA_FAILURE})
}
 }
useEffect(()=>{
  getData()
},[currentPage])

const handleChange=(prev)=>{
setCurrentPage(prev)
}
  return (
    <>
     <h1>React list of data</h1>
     {isLoading&&<h2>Loading...</h2>}
     {isError&&<h2>Some error occured</h2>}
     <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th isNumeric>YEAR</Th>
        <Th>COMPETITION</Th>
        <Th >ROUND</Th>
        <Th>TEAM 1</Th>
        <Th>TEAM 2</Th>
        <Th>TEAM 1 GOALS</Th>
        <Th>TEAM 2 GOALS</Th>
      </Tr>
    </Thead>
    <Tbody>
      {footballMatches.map((ele,index)=>(
       
        <Tr key={index}>
        <Td>{ele.year}</Td>
        <Td>{ele.competition}</Td>
        <Td>{ele.round}</Td>
        <Td>{ele.team1}</Td>
        <Td>{ele.team2}</Td>
        <Td>{ele.team1goals}</Td>
        <Td>{ele.team2goals}</Td>
      </Tr>
      
      ))}
      
     
     
    </Tbody>
    
  </Table>
</TableContainer>
    <Pagination currentPage={currentPage} totalPage={totalpage} onPageChange={handleChange}/>
    </>
  )
}

export default App
