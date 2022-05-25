import React, { useEffect, useState } from "react";
import {POST} from "../../../services/httpClient";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "../snakebar/index";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Img,
  Column1,
  Column2,
  TopLine,
  Heading,
  Button,
  InfoContainer,
  ImgWrap,
  TextWrapper,
  InfoWrapper,
  InfoRow
} from "./contactElements";

import img1 from "../../images/off the beaten track.png";
import { TextField, Box } from "@mui/material";


export const homeObjfour = {
id: "contact",
  lightBg: false,
  lightText: true,
  topLine: "OFF THE BEATEN TRACK",
  headline: "Contact US",
  imgStart: false,
};
const ContactUs = ({
    lightBg, lightText, id, imgStart, headline, topLine

}) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const initialValues = {
    name: "",
    suggestion:"",
    email: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const [isloading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const resetForm = () => {
    setFormValues(initialValues);
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      setType("error");
      setsnakbarMessage("Email is Required");
      setOpen(true);
    } else if (!regex.test(values.email)) {
      setType("error");
      setsnakbarMessage("This is not a valid email format!");
      setOpen(true);
    }
     else return true;
  };
  const create = async (formValues) => {
      setLoading(true);
      let res = await POST ("hello", formValues);
      if (res?.code === 200) {
        setType("success");
        setOpen(true);
        setLoading(false);
        setsnakbarMessage(res?.message);
        resetForm();
      } else {
        setType("error");
        setOpen(true);
        setLoading(false);
        setsnakbarMessage(res?.message);
        resetForm();
      }
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart = {imgStart}>
          <Column1>
              <TextWrapper data-aos="zoom-in">
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <form onSubmit={handleSubmit}>
               <Box sx={{ width: 650, maxWidth: "100%" }}>
              <TextField
                label="Name"
                type="name"
                fullWidth
                name="name"
                placeholder="Enter your name"
                variant="standard"
                value={formValues.name}
                onChange={handleChange}
              />
            <TextField
                label="Email"
                type="email"
                fullWidth
                name="email"
                placeholder="Enter your email"
                variant="standard"
                value={formValues.email}
                onChange={handleChange}
              />
              <TextField
                label="Suggestion"
                type="suggestion"
                name="suggestion"
                multiline
                fullWidth
                rows={10}
                variant="standard"
                placeholder="Enter your suggestion"
                value={formValues.suggestion}
                onChange={handleChange}
              />
            </Box>
            <Button
            type="submit"
            onClick={async () => {
              let validation = validate(formValues);
              if (validation) await create(formValues);
            }}
          >
            {isloading && <CircularProgress />}
            {!isloading && <span>Send</span>}
          </Button>
            </form>
              </TextWrapper>
              </Column1>
              <Column2>
               <ImgWrap data-aos="zoom-in">
                 <Img src={img1} alt="" />
               </ImgWrap>
             </Column2>
             </InfoRow>
             </InfoWrapper>
             </InfoContainer>
       {open && (
         <Snackbar
           open={open}
           setOpen={setOpen}
           type={type}
           message={snakbarMessage}
         />
       )}
     </>
   );
 };
export default ContactUs;
