import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { departmentData } from "../services/data";


export default function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);

  const onChange = () => {
    if (isChecked) {
      setIsChecked(false);
    } else if (isChecked === false) {
      setIsChecked(true);
    } else setIsChecked(false);
  };

  const onChange2 = () => {
    if (isChecked2) {
      setIsChecked2(false);
    } else if (isChecked2 === false) {
      setIsChecked2(true);
    } else setIsChecked2(false);
  };

  useEffect(() => {
    setIsChecked(isChecked);
    setIsChecked2(isChecked2);
  }, [isChecked, isChecked2]);

  console.log(departmentData[0]);

  return (
    <div className="App">
      <h1>Component 2nd</h1>
      <Accordion disableGutters sx={{ width: "25%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormControlLabel
            control={
              <Checkbox
                // defaultChecked={isDepartmentChecked}
                onChange={onChange}
                checked={isChecked}
                sx={{ pointerEvents: "none" }}
              />
            }
            label={departmentData[0].department}
          />
        </AccordionSummary>
        <AccordionDetails>
          {
            <FormControlLabel
              control={<Checkbox checked={isChecked} />}
              label={departmentData[0].sub_departments[0]}
            />
          }
          <br />
          <FormControlLabel
            control={<Checkbox checked={isChecked} />}
            label={departmentData[0].sub_departments[1]}
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
            control={
              <Checkbox
                onChange={onChange2}
                checked={isChecked2}
                sx={{ pointerEvents: "none" }}
              />
            }
            label={departmentData[1].department}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox checked={isChecked2} />}
            label={departmentData[1].sub_departments[0]}
          />{" "}
          <br />
          <FormControlLabel
            control={<Checkbox checked={isChecked2} />}
            label={departmentData[1].sub_departments[1]}
          />{" "}
          <br />
          <FormControlLabel
            control={<Checkbox defaultChecked checked={isChecked2} />}
            label={departmentData[1].sub_departments[2]}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
