const API_BASE = import.meta.env.VITE_API_URL || 'https://portfolio-rohitanshu-backend.onrender.com/api/v1';

export const fetchProfile = async () => {
  try {
    const res = await fetch(`${API_BASE}/profile`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('[API Client] Profile fetch failed, using fallback:', err.message);
    return null;
  }
};

export const fetchProjects = async (category) => {
  try {
    const url = category ? `${API_BASE}/projects?category=${encodeURIComponent(category)}` : `${API_BASE}/projects`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('[API Client] Projects fetch failed, using fallback:', err.message);
    return null;
  }
};

export const fetchSkills = async () => {
  try {
    const res = await fetch(`${API_BASE}/skills`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('[API Client] Skills fetch failed, using fallback:', err.message);
    return null;
  }
};

export const fetchExperience = async () => {
  try {
    const res = await fetch(`${API_BASE}/experience`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('[API Client] Experience fetch failed, using fallback:', err.message);
    return null;
  }
};

export const fetchAchievements = async () => {
  try {
    const res = await fetch(`${API_BASE}/achievements`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('[API Client] Achievements fetch failed, using fallback:', err.message);
    return null;
  }
};

export const submitContact = async (formData) => {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message || 'Failed to submit contact message');
  }
  return json;
};
