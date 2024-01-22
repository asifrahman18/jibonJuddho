export async function getJobs() {
    const res = await fetch(`http://127.0.0.1:8000/api/job/`);
    return res.json();
  }