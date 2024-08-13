export const EAuthRoutes = {
  signup: '/signup',
  login: '/login',
  logout: '/logout',
};

export const EMessageRoutes = {
  dynamicId: '/:id',
  sendDynamicId: '/send/:id',
};

export const EUserRoutes = {
  main: '/',
  updateUser: '/update-user',
};

export const EModels = {
  name: {
    Users: 'Users',
    Message: 'Message',
    Conversation: 'Conversation',
  },
  ref: {
    User: 'User',
    Message: 'Message',
  },
};

export const EStatusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUNDS: 404,
  INTERNAL_SERVER_ERROR: 500,
};
