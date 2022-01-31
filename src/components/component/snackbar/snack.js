// import React, { useState, useEffect } from 'react';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
// import { Box } from '@material-ui/core';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& >  + ': {
//       marginTop: theme.spacing(4),
//     },
//   },
// }));

// export default function CustomizedSnackbars({ snackbarType: type, snackbarMessage: message }) {
//   const classes = useStyles();

//   return (
//     <Box className={classes.root}>
//       {type === 'info' && (
//         <Snackbar open={true}>
//           <Alert severity="info">{message}</Alert>
//         </Snackbar>
//       )}
//       {type === 'success' && (
//         <Snackbar open={true}>
//           <Alert severity="success">{message}</Alert>
//         </Snackbar>
//       )}
//       {type === 'warning' && (
//         <Snackbar open={true}>
//           <Alert severity="warning">{message}</Alert>
//         </Snackbar>
//       )}
//       {type === 'error' && (
//         <Snackbar open={true}>
//           <Alert severity="error">{message}</Alert>
//         </Snackbar>
//       )}
//     </Box>
//   );
// }
