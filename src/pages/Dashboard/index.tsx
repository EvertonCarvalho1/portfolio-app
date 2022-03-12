import React from "react";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";


const Dashboard: React.FC = () => {
    return (
        <>
            <Sidebar />
            
            <Content/>
        </>
    )
};

export default Dashboard;