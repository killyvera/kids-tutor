import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Storage } from 'aws-amplify';


export default function DownloadPage() {
  const router = useRouter();
  const { id } = router.query;
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    async function fetchDownloadUrl() {
      try {
        const url = await Storage.get(id, { expires: 3600 });
        setDownloadUrl(url);
      } catch (error) {
        console.error(error);
      }
    }

    if (id) {
      fetchDownloadUrl();
    }
  }, [id]);

  return (
    <div>
      <h1>Download Page</h1>
      {downloadUrl ? (
        <a href={downloadUrl} download>
          Download File
        </a>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
