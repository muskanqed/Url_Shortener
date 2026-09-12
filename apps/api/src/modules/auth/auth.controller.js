const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    return res.status(201).json({
      success: true,
      message: "Signup successful"
    });
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }

}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    return res.status(201).json({
      success: true,
      message: "Signin successful"
    })
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

const logout = async (req, res) => {
  try {
    // Logout logic will be added later

    return res.status(200).json({
      success: true,
      message: "Logout successful"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

module.exports = {
  signup,
  login,
  logout
}