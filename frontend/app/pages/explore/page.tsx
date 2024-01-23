'use client'

import React, { useState, useEffect } from "react";
import { getJobs } from "../../api/getJobs/route";

import JobDetail from "./jobDetail";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

interface Job {
  id: number;
  title: string;
  description: string;
}

const Explore = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const jobData: Job[] = await getJobs();
      setJobs(jobData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex h-screen pt-11">
      <div className="flex-1 p-4">
        <>
          {jobs.length === 0 ? (
            <p>No Job is currently registered.</p>
          ) : (
            <Table className="border-collapse border w-full">
                <TableCaption>List of Jobs</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="border p-2">Name</TableHead>
                  <TableHead className="border p-2">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id} className="cursor-pointer">
                    <TableCell className="border p-2">{job.title}</TableCell>
                    <TableCell className="border p-2">{job.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </>
      </div>
      <div className="flex-1 p-4">
  <JobDetail/>
      </div>
    </div>
  );
};

export default Explore;
