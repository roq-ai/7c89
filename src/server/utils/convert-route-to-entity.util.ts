const mapping: Record<string, string> = {
  renamedclasses: 'Renamedclass',
  events: 'event',
  schools: 'school',
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
