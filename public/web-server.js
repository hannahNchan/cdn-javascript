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
    Icon,
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
      //marginTop: '100px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginLeft: '20px',
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
    hannahContainerRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    volume: {
      width: 250,
    },
    input: {
      width: 42,
    },
    icon: {
      padding: theme.spacing(1),
      textAlign: 'center',
      borderRadius: '100px',
      border: 'solid 1px black'
    },
  }));

  const App = () => {
    const classes = useStyles();
    const [color, setColor] = React.useState(false);
    const [value, setValue] = React.useState(30);

    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={2}>
            <IconButton className="fa fa-sun" style={{ color: 'blue' }} />
          </Grid>
          <Grid item xs={2}>
            <IconButton className="fa fa-sun" style={{ color: 'blue' }} />
          </Grid>
          <Grid item xs={2}>
            <IconButton className="fa fa-sun" style={{ color: 'blue' }} />
          </Grid>
        </React.Fragment>
      );
    }

    const handleClick = (event, color) => {
      setColor(color);
    };

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Container>
        <div className={classes.hannahContainerRow} >
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
              <Grid container spacing={2}>
                <Grid item>
                  <Icon className="fa fa-sun" style={{ color: 'blue' }} />
                </Grid>
                <Grid item xs>
                  <Slider value={value} onChange={handleSliderChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <Icon className="fas fa-sun" style={{ color: 'blue' }} />
                </Grid>
              </Grid>
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
                  <div>
                    {['blockOne','blockTwo','blockThree'].map((it,idx) => {
                      return (
                        <Grid container spacing={1} key={idx}>
                          <Grid container item xs={12} spacing={3}>
                            <FormRow id={it}/>
                          </Grid>
                          <Grid container item xs={12} spacing={3}>
                            <FormRow id={it}/>
                          </Grid>
                          <Grid container item xs={12} spacing={3}>
                            <FormRow id={it}/>
                          </Grid>
                        </Grid>
                      )
                    })}
                  </div>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.hannahContainer}>
            </CardActions>
          </Card>
        </div>
      </div>
    </Container>
    );
  }

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ marginTop: '100px' }}>
        <App />
      </div>
    </ThemeProvider>,
    document.querySelector('#root'),
  );
