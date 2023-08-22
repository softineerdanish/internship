import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { departmentData } from "../services/data";

import { Box } from "@mui/material";


export default function App() {
    const [checked1, setChecked1] = React.useState([true, false]);
    const [checked2, setChecked2] = React.useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked1([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked1([event.target.checked, checked1[1]]);
    };
  
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked1([checked1[0], event.target.checked]);
    };

    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked2([event.target.checked, event.target.checked , event.target.checked]);
    };
  
    const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked2([event.target.checked, checked2[1],checked2[2]]);
    };
  
    const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked2([checked2[0], event.target.checked, checked2[2]]);
    };
    const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked2([checked2[0],checked2[1] , event.target.checked]);
    };
  
    const children1 = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label={departmentData[0].sub_departments[0]}
          control={<Checkbox checked={checked1[0]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label={departmentData[0].sub_departments[1]}
          control={<Checkbox checked={checked1[1]} onChange={handleChange3} />}
        />
      </Box>
    );
    const children2 = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label={departmentData[1].sub_departments[0]}
          control={<Checkbox checked={checked2[0]} onChange={handleChange5} />}
        />
        <FormControlLabel
          label={departmentData[1].sub_departments[1]}
          control={<Checkbox checked={checked2[1]} onChange={handleChange6} />}
        />
         <FormControlLabel
          label={departmentData[1].sub_departments[2]}
          control={<Checkbox checked={checked2[2]} onChange={handleChange7} />}
        />
      </Box>
    );
  
  return (
    <div className="App">
      <h1>Component 2nd</h1>
      <Accordion disableGutters sx={{ width: "25%" }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <FormControlLabel
        label={departmentData[0].department}
        control={
          <Checkbox
            checked={checked1[0] && checked1[1]}
            indeterminate={checked1[0] !== checked1[1]}
            onChange={handleChange1}
          />
        }
      />
      
        </AccordionSummary>
        <AccordionDetails>
        {children1}
         
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters sx={{ width: "25%" }} defaultExpanded >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
          >
         <FormControlLabel
        label={departmentData[1].department}
        control={
          <Checkbox
            checked={checked2[0] && checked2[1] && checked2[2] }
            indeterminate={checked2[0] !== checked2[1] && checked2[0] !== checked2[2]}
            onChange={handleChange4}
          />
        }
      />
      
        </AccordionSummary>
        <AccordionDetails>
        {children2}
         
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
