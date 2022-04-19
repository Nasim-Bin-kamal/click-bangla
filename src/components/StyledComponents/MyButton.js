import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MyButton = styled(Button)({
    backgroundColor: "#1bab42",
    padding: "8px 20px",
    color: '#fff',

    "&: hover": {
        backgroundColor: '#1fcf4f'
    }

})

export default MyButton;