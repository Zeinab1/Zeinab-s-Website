import React, { PureComponent } from 'react';
class FadeIn extends Component {
    state = { 
        checked:true,
     }
    render() { 
        return (
            <div className={classes.container}>
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Paper elevation={4} className={classes.paper}>
                  <svg className={classes.svg}>
                    <polygon
                      points="0,100 50,00, 100,100"
                      className={classes.polygon}
                    />
                  </svg>
                </Paper>
              </Grow>
        
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 2000 } : {})}
              >
                <Paper elevation={4} className={classes.paper}>
                  <svg className={classes.svg}>
                    <polygon
                      points="0,100 50,00, 100,100"
                      className={classes.polygon}
                    />
                  </svg>
                </Paper>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 4000 } : {})}
              >
                <Paper elevation={4} className={classes.paper}>
                  <svg className={classes.svg}>
                    <polygon
                      points="0,100 50,00, 100,100"
                      className={classes.polygon}
                    />
                  </svg>
                </Paper>
              </Grow>
            </div>
          );
    }
}
 
export default FadeIn;

 

