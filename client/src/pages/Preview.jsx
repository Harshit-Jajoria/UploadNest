import React, { useState, useEffect } from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { useLocation } from 'react-router-dom';

function Preview() {
  const location = useLocation();
  const uri = location.state.uri;
  console.log(uri);
  const [error, setError] = useState(null);
  const [docs, setDocs] = useState([
    {
      uri: uri,
    },
  ]);

  useEffect(() => {
    fetchDocument().catch((error) => {
      setError(error.message);
    });
  }, []);

  async function fetchDocument() {
    try {
      const response = await fetch(docs[0].uri);
      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }
      // Continue with rendering the PDF here.
    } catch (error) {
      setError(error.message);
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}

export default Preview;
