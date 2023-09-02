import React from 'react'
import { Button, Table } from 'react-bootstrap'
import classe from './Home.module.css'

const Home = () => {
  return (
    <div className={classe.homes}>
      <h1 className="mt-5">Tours</h1>
      <Table className=' text-center table-striped table-bordered mt-4 ' style={{width:750,}}>
        <tbody className='p-3'>
          <tr>
              <td><h6>JUL6</h6></td>
              <td>Chennai,IND</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td ><Button variant='success'>BUY TICKET</Button></td>
          </tr>
          <tr>
              <td><h6>JUL6</h6></td>
              <td>Kochi,IND</td>
              <td>BUDWEISER STAGE</td>
              <td ><Button variant='success'>BUY TICKET</Button></td>
          </tr>
          <tr>
              <td><h6>JUL6</h6></td>
              <td>Chennai,IND</td>
              <td>JIGGY LUBE LIVE</td>
              <td ><Button variant='success'>BUY TICKET</Button></td>
          </tr>
          <tr>
              <td><h6>JUL6</h6></td>
              <td>Chennai,IND</td>
              <td>AK-CHIN PAVILION</td>
              <td ><Button variant='success'>BUY TICKET</Button></td>
          </tr>
          <tr>
              <td><h6>JUL6</h6></td>
              <td>Chennai,IND</td>
              <td>T-MOBILE ARENA</td>
              <td ><Button variant='success'>BUY TICKET</Button></td>
          </tr>
          <tr>
              <td><h6>JUL6</h6></td>
              <td>Chennai,IND</td>
              <td>CONCORD PAVILION</td>
              <td ><Button variant='success'>BUY TICKET</Button></td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Home