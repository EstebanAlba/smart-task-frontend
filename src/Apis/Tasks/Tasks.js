// Apis/Tasks/Tasks.js
import api from '../config'; // axios configurado con baseURL = http://localhost:3000

// Crear una nueva tarea
export const createTask = (data) => api.post('/tasks', data);

// Obtener todas las tareas
export const getTasks = () => api.get('/tasks');

// Obtener una tarea por ID
export const getTaskById = (id) => api.get(`/tasks/${id}`);

// Actualizar una tarea por ID
export const updateTask = (id, data) => api.put(`/tasks/${id}`, data);

// Eliminar una tarea por ID
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
