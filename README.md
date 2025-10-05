# 🏥 Patients Project with React + TypeScript

Aplicación práctica de **Registro de Pacientes**, desarrollada con **React + TypeScript + Tailwind + Zustand + React Hook Form + React Toastify** para reforzar conceptos clave de hooks, patrones de estado y buenas prácticas en desarrollo frontend.
La app permite:

- **Formulario de registro de pacientes**
- **Actualización de pacientes**
- **Eliminar Pacientes**
- **Persistencia con LocalStorage**

---

**⚛️ Hooks de React aplicados:**
- 🗂️ `useState`  → Manejo de estados locales (inputs, validaciones rápidas, toggles de UI).

- 🚀 `useEffect` → Sincronización con LocalStorage para persistencia de pacientes.

- 🗝️ `useId` → Generación de identificadores únicos en formularios.

- 🤖 `useMemo` → Optimización de cálculos derivados (por ejemplo, listado de pacientes).

**🔹 Hooks de Zustand**

- `useStore` → Consumo del estado global de pacientes sin necesidad de prop drilling.

**🔹 Hooks de React Hook Form**

- `useForm` → Manejo de formularios (control de inputs, validaciones, envío de datos).

- `Controller` (componente hook-based) → Integración de inputs personalizados con el formulario.
  
---

## 📂 Estructura del proyecto

```
├─ components/ # Componentes reutilizables
├─ store/ #  Estado global con zustand 
├─ types/ # Definición de types (Patient, DraftPatient.)
└─ App.jsx # Punto de entrada principal
```
---

## 🔧 Setup del proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/thonyrm/guitar_project.git
   ```
2. Instalar dependencias:

    ```
    npm install
    ```

3. Ejecutar en modo desarrollo:
    ```
    npm run dev
    ```
