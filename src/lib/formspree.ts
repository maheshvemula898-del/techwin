export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjekrvl";

export const submitToFormspree = async (payload: Record<string, string> | FormData) => {
  const isMultipart = payload instanceof FormData;
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: isMultipart
      ? { Accept: "application/json" }
      : {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
    body: isMultipart ? payload : JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }

  return response;
};
