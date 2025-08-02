# 💸 Finanzas App - Backend

Backend de una aplicación web para el control de finanzas personales. Permite registrar sueldos, métodos de pago, gastos fijos y variables, y visualizar resúmenes mensuales.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv

---

## 📁 Estructura del proyecto
backend/
│
├── controllers/ # Lógica de negocio
│ ├── authController.js
│ ├── incomeController.js
│ └── expenseController.js
│
├── models/ # Esquemas de datos
│ ├── User.js
│ ├── Income.js
│ └── Expense.js
│
├── routes/ # Rutas de la API
│ ├── authRoutes.js
│ ├── incomeRoutes.js
│ └── expenseRoutes.js
│
├── config/ # Configuración de la BD
│ └── db.js
│
├── .env # Variables de entorno (NO subir a Git)
├── .gitignore
├── package.json
└── index.js # Entrada principal

yaml
Copiar código

---

## ⚙️ Instalación

# Clonar el repositorio
git clone https://github.com/tu-usuario/finanzas-backend.git
cd finanzas-backend

# Instalar dependencias
npm install

# Crear archivo .env
Crear un archivo .env en la raíz con el siguiente contenido:

env
Copiar código
PORT=5000
MONGO_URI=mongodb://localhost:27017/finanzas_db
JWT_SECRET=supersecreto123
▶️ Ejecutar el servidor
bash
Copiar código
node index.js
El servidor arrancará en:

arduino
Copiar código
http://localhost:5000
📬 Endpoints principales
Autenticación
POST /api/auth/register → Registro de usuario

POST /api/auth/login → Login de usuario

Ingresos
GET /api/income → Listar ingresos (requiere JWT)

POST /api/income → Crear ingreso

Gastos
GET /api/expenses → Listar gastos

POST /api/expenses → Crear gasto

# Todas las rutas privadas requieren token JWT en el header:
Authorization: Bearer <token>

# Autor
Desarrollado por Nicolas Petersen- 2025
