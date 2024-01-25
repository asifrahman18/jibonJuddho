
import React, { useEffect, useState } from "react";
import { getJobDetail } from "../../api/getJobs/route";
import moment from 'moment'

interface JobDetailProps {
  jobId: number | null;
}

interface Job {
  id: number;
  title: string;
  description: string;
  email: string;
  location: string;
  jobType: string;
  salary: number;
  openings: number;
  qualification: string;
  company: string;
  expiresAt: string;
  createdAt: string;
}


const JobDetail: React.FC<JobDetailProps> = ({ jobId }) => {
  const [jobDetail, setJobDetail] = useState<Job | null>(null);

  useEffect(() => {
    if (jobId !== null) {
      fetchJobDetail(jobId);
    }
  }, [jobId]);

  const fetchJobDetail = async (id: number) => {
    try {
      const jobData: Job = await getJobDetail(id);
      setJobDetail(jobData);
      console.log(jobData);
    } catch (error) {
      console.error("Error fetching job detail:", error);
    }
  };

  return (
    <div>
      {jobDetail ? (

        <div>
        <div className="text-3xl md:text-6xl text-center">
          <h1>{jobDetail.title}</h1>
        </div>
        <div className="text-xl md:text-3xl py-2">
          <p>{jobDetail.description}</p>
        </div>
        <p>Job Summary</p>
        <div className="text-xl py-2">
          <p>Email: {jobDetail.email}</p>
        </div>
        <div className="text-xl py-2">
          <p>Location: {jobDetail.location}</p>
        </div>
        <div className="text-xl py-2">
          <p>Salary: {jobDetail.salary}</p>
        </div>
        <div className="text-xl py-2">
          <p>Openings: {jobDetail.openings}</p>
        </div>
        <div className="text-xl py-2">
          <p>Qualification: {jobDetail.qualification}</p>
        </div>
        <div className="text-xl py-2">
          <p>Job Type: {jobDetail.jobType}</p>
        </div>
        <div className="text-xl py-2">
          <p>Created At: {moment.utc(jobDetail.createdAt).local().startOf('seconds').fromNow()}</p>
        </div>
        <div className="text-xl py-2">
          <p>Expires At: {jobDetail.expiresAt.substring(0, 10)}</p>
        </div>
        </div>
      ) : (
        <p>Select a job to view details</p>
      )}
    </div>
  );
};

export default JobDetail;
