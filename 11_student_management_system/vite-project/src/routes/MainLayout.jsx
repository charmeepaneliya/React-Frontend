import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import NavbarComponent from '../ui/Navbar'
import { Outlet } from 'react-router-dom'
import "../style/student.css"

const MainLayout = () => {
  return (
    <>
        <Container>
            <Row>
                <Col>
                <NavbarComponent/>
                <Outlet />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default MainLayout
