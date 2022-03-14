import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SourceIcon from '@mui/icons-material/Source';
import ErrorIcon from '@mui/icons-material/Error';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import FreeSolo from "./Search"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}  >
      <nav aria-label="main mailbox folders" >
        <List >
          <ListItem disablePadding>
            <ListItemButton alignItems="flex-start" sx={{ width: "70px" }}>
                <ListItemIcon>
                  <motion.div className='app__leftbar-search'
                  variant={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  >
                    <SearchIcon sx={{color: "#ED5F49"}}/>
                  </motion.div>
                </ListItemIcon>
            </ListItemButton>
            <ListItemIcon>
                <FreeSolo />
            </ListItemIcon>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <motion.div className='app__leftbar-search'
                    variant={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                >
                <DashboardIcon sx={{color: "#ED5F49"}}/>
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <motion.div className='app__leftbar-search'
                  variant={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  >
                <FilterAltIcon sx={{color: "#ED5F49"}}/>
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Filter" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <motion.div className='app__leftbar-search'
                  variant={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  >
                <SourceIcon sx={{color: "#ED5F49"}}/>
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Data Source" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <motion.div className='app__leftbar-search'
                  variant={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  >
                <ErrorIcon sx={{color: "#ED5F49"}}/>
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Alerting" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <motion.div className='app__leftbar-search'
                  variant={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  >
                <GroupIcon sx={{color: "#ED5F49"}}/>
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <motion.div className='app__leftbar-search'
                  variant={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  >
                <SettingsIcon sx={{color: "#ED5F49"}}/>
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
    </Box>
  );
}
