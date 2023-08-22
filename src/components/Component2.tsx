
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";



export default function App() {
  return (
    <div className="App">
      <h1>Component 2nd</h1>
     

      <Accordion disableGutters sx={{ width: "25%" }} >
        <AccordionSummary
          
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormControlLabel
            control={<Checkbox sx={{ pointerEvents: "none" }}  />}
            label="Label 1"
          />
        </AccordionSummary>
        <AccordionDetails>
        <FormControlLabel
            control={<Checkbox   />}
            label="Label 1.1"
          /> <br />
          <FormControlLabel
            control={<Checkbox   />}
            label="Label 1.2"
          /> <br/>
          <FormControlLabel
            control={<Checkbox   />}
            label="Label 1.3"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters sx={{ width: "25%" }}>
        <AccordionSummary
          
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <FormControlLabel
            
            control={<Checkbox sx={{ pointerEvents: "none" }}  />}
            label="Label 2"
          />
        </AccordionSummary>
        <AccordionDetails>
        <FormControlLabel
            control={<Checkbox   />}
            label="Label 2.1"
          /> <br />
          <FormControlLabel
            control={<Checkbox   />}
            label="Label 2.2"
          /> <br/>
          <FormControlLabel
            control={<Checkbox   />}
            label="Label 2.3"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters sx={{ width: "25%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <FormControlLabel
            control={<Checkbox sx={{ pointerEvents: "none" }}  />}
            label="Label 3"
          />
        </AccordionSummary>
        <AccordionDetails>
        <FormControlLabel
            control={<Checkbox   />}
            label="Label 3.1"
          /> <br />
          <FormControlLabel
            control={<Checkbox   />}
            label="Label 3.2"
          /> <br/>
          <FormControlLabel
            control={<Checkbox   />}
            label="Label 3.3"
          />
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
