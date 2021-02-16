import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    margin: "auto",
    marginTop: "200px",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: "30px",
    width: "350px",
    height: "350px",
  },
  input: {},
  btn: {
    fontSize: 12,
  },
  textField: {
    margin: theme.spacing(1),
  },
  title: {
    marginTop: "100px",
    fontSize: "large",
  },
}));
