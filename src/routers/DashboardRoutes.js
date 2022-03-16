import { Route, Routes } from 'react-router-dom'
import { Navbar } from "../components/ui/Navbar"
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import React from 'react'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="hero/:heroeId" element={<HeroScreen />} />

              <Route path="search" element={<SearchScreen />} />

              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}