import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const ForgetPass = ({
  size,
  setSize,
  email,
  setEmail,
  loading,
  handleReset,
  handleOpen,
}) => {
  const handleClose = () => setSize(null);
  return (
    <Dialog className="" open={size === "md"} handler={handleOpen}>
      <DialogHeader>Reset Your Password</DialogHeader>
      <DialogBody>
        <p className="text-sm text-gray-500">
          Enter your email to receive a password reset link.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-3 px-3 py-2 border border-slate-200 rounded-md focus:outline-[#00C982]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleClose}>
          Cancel
        </Button>
        <Button color="green" onClick={handleReset} disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

ForgetPass.propTypes = {
  size: PropTypes.string,
  setSize: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  loading: PropTypes.bool,
  handleReset: PropTypes.func,
  handleOpen: PropTypes.func,
};

export default ForgetPass;
