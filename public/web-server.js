  const {
    colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    makeStyles,
    createMuiTheme,
    Button,
    ButtonGroup,
    MoreVertIcon,
    ExpandMoreIcon,
    ShareIcon,
    FavoriteIcon,
    IconButton,
    Avatar,
    Collapse,
    CardActions,
    CardContent,
    CardMedia,
    CardHeader,
    Card,
    CardActionArea,
    Slider,
    Input,
    VolumeUp,
    Grid,
    Brightness7Icon,
  } = MaterialUI;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: colors.red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    top: {
      marginTop: '100px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'red',
    },
    hannahContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    volume: {
      width: 250,
    },
    input: {
      width: 42,
    },
  }));

  const App = () => {
    const classes = useStyles();
    const [color, setColor] = React.useState(false);
    const [value, setValue] = React.useState(30);

    const handleClick = (event, color) => {
      //event.preventDefault();
      setColor(color);
    };

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleInputChange = (event) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
      if (value < 0) {
        setValue(0);
      } else if (value > 100) {
        setValue(100);
      }
    };

    return (
      <Container fixed>
      <div className={classes.top}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Contemplative Reptile'
              image='https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/09/image011-1-1220x851.png'
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Change color
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                You can select the color, click in button below and choose
                the right color, then set the color intensity.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.hannahContainer}>
            <div className={classes.volume}>
              <Typography id="input-slider" gutterBottom>
                Intensity
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Brightness7Icon />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    className={classes.input}
                    value={value}
                    margin="dense"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <ButtonGroup color='primary' variant='text' aria-label='contained primary button group'>
              <Button
                href='/red'
                style={{ opacity: color === 'red' ? '1': '0.2' }}
                className='colorRed'
                onClick={(e) => handleClick(event,'red')}>Red</Button>
              <Button
                href='/green'
                style={{ opacity: color === 'green' ? '1': '0.2' }}
                className='colorGreen'
                onClick={(e) => handleClick(event,'green')}>Green</Button>
              <Button
                href='/blue'
                style={{ opacity: color === 'blue' ? '1': '0.2' }}
                className='colorBlue'
                onClick={(e) => handleClick(event, 'blue')}>Blue</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </div>
    </Container>
    );
  }

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.querySelector('#root'),
  );
