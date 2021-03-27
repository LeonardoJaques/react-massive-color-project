import { withStyles } from '@material-ui/styles';
import React from 'react';
import styles from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
  const { paletteName, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      {paletteName} <span className={classes.emoji}>🤷‍♂️</span>
    </footer>
  );
}
export default withStyles(styles)(PaletteFooter);
