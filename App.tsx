import React from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MorningAthkar } from './components/MorningAthkar';
import { EveningAthkar } from './components/EveningAthkar';
import { DeceasedPrayers } from './components/DeceasedPrayers';
import { SickPrayers } from './components/SickPrayers';
import { DigitalTasbeeh } from './components/DigitalTasbeeh';
import { RandomContent } from './components/RandomContent';
import { UsefulLinks } from './components/UsefulLinks';

function App() {
  return (
    <div dir="rtl" lang="ar" className="text-white bg-black">
      <Navbar />
      <Header />
      <div className="max-w-[800px] mx-auto p-2 md:p-8 my-8">
        <MorningAthkar />
        <EveningAthkar />
        <DeceasedPrayers />
        <SickPrayers />
        <DigitalTasbeeh />
        <RandomContent />
        <UsefulLinks />
      </div>
      <Footer />
    </div>
  );
}

export default App;