import React, { useState } from 'react';
import Modal from './assets/Modal';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Åbn Modal</button>
      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        backgroundColor="white"
        fontColor="black"
        width="500px"
        height="400px"
      >
        <h2>Hej fra modalen!</h2>
        <p>Her er noget indhold</p>
        <p> pros </p>
         <p>Bedre udvikleroplevelse: Autocomplete, dokumentation, og fejlmeddelelser i editoren.</p>
         <p>Mere selvdokumenterende kode: Typer viser hvad funktionen forventer og returnerer.</p>
         <p>Bedre samarbejde i teams: Mindre risiko for misforståelser.</p>
         <p> cons </p>
         <p>Mere kode: Du skal skrive flere linjer, især i starten.</p>
         <p>Kræver tooling: Du skal sætte TypeScript og en compiler op.</p>
         <p>Læringskurve: Især for nye udviklere kan typer virke forvirrende i starten.</p>
      </Modal>
    </>
  );
};

export default App;
