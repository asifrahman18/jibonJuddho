"use client";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getCompany } from "../api/company/route";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import AddJobs from "./contents/addJobForm";
import AddCompanyPanel from "./contents/addCompanyPanel";
import ViewJobs from "./contents/viewJob";

interface Company {
  id: number;
  name: string;
  description: string;
  phone: string;
  location: string;
  email: string;
}

const CompanyPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const Uid = user?.id;
  const [company, setCompany] = useState<Company[]>([]);
  const [isCompany, setIsCompany] = useState(false);

  const [id, setId] = useState<number | null>(null);
  const [Jid, setJId] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);

  if (!isAuthenticated) {
    redirect("/signIn");
  }

  useEffect(() => {
    if (user && user.id) {
      fetchData(user.id);
    }
  }, [user]);

  const fetchData = async (Uid: number) => {
    try {
      console.log("Inside fetch data", Uid);
      const companyData: Company[] = await getCompany(Uid);
      if (companyData == null) {
        setIsCompany(false);
      } else {
        setCompany(companyData);
        setIsCompany(true);
        console.log(companyData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleAddClick = (companyID: number, companyName: string) => {
    setJId(null);
    setId(companyID);
    setName(companyName);
  };

  const handleViewClick = (companyID: number) => {
    //console.log('Inside fetch hancleviewcliclviewjob:',companyID);
    setId(null);
    setJId(companyID);
    console.log(Jid);
  }

  return (
    <div className="grid grid-cols-2 gap-2 pt-24 px-4 h-screen">
      {isAuthenticated && (
        <div className=" p-4">
          <AddCompanyPanel compId={user.id}/>
          <div className="text-2xl font-bold mb-4">
            {isCompany && (
              <div>
                <p className="my-2">Your Registered Company</p>
                <Accordion type="single" collapsible className="w-full">
                  {company.map((comp) => (
                    <AccordionItem
                      value={comp.id.toString()}
                      key={comp.id}
                      className="cursor-pointer"
                    >
                      <AccordionTrigger className="p-2">
                        {comp.name}
                      </AccordionTrigger>
                      <AccordionContent className="p-2">
                        Location: {comp.location}
                      </AccordionContent>
                      <AccordionContent className="p-2">
                        Phone: {comp.phone}
                      </AccordionContent>
                      <AccordionContent className="p-2">
                        Email: {comp.email}
                      </AccordionContent>
                      <AccordionContent className="p-2">
                        Jobs:{" "}
                      </AccordionContent>
                      <AccordionContent className="p-2">
                        <div className="flex gap-6">
                          <Button
                            variant="outline"
                            onClick={() => handleAddClick(comp.id, comp.name)}
                          >
                            Add Jobs
                          </Button>
                          <Button variant="outline" onClick={() => handleViewClick(comp.id)}>View Jobs</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
            {!isCompany && <p>No Companies Registered</p>}
          </div>
        </div>
      )}
      {id !== null && (
        <div className="p-4">
          <AddJobs compId={id} compName={name} />
        </div>
      )}
      {Jid !== null && <div><ViewJobs compId={Jid}/></div>}
    </div>
  );
};

export default CompanyPage;
