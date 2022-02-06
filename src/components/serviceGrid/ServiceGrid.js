import * as React from "react";
import { Tab, Typography, Box  } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ServiceCard from "../widgets/ServiceCard/ServiceCard";
import "./serviceGrid.css";
import Services from "../../data/services/Services";

const ServiceGrid = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="service-container">
      <Typography component="div">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box className="techvanto-service">
              <Typography component="h2" className="techvanto-whyus-heading">
                Our Services
              </Typography>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs"
                className="services-tabs"
              >
                <Tab label="SCHOOLS" value="1" />
                <Tab label="Intermediate" value="2" />
                <Tab label="UNDERGRADS" value="3" />
                <Tab label="COMPANIES" value="4" />
                <Tab label="COLLEGES" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="row service-grid">
                {Services.map((data) => {
                  if (data.tab === "School") {
                    return (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    );
                  }
                })}
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="row service-grid">
                {Services.map((data) => {
                  if (data.tab === "Intermediate") {
                    return (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    );
                  }
                })}
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="row service-grid">
                {Services.map((data) => {
                  if (data.tab === "Undergrads") {
                    return (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    );
                  }
                })}
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className="row service-grid">
                {Services.map((data) => {
                  if (data.tab === "Companies") {
                    return (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    );
                  }
                })}
              </div>
            </TabPanel>
            <TabPanel value="5">
              <div className="row service-grid">
                {Services.map((data) => {
                  if (data.tab === "Colleges") {
                    return (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    );
                  }
                })}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </Typography>
    </div>
  );
};

export default ServiceGrid;
