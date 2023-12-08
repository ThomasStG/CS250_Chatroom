const load = async ({ locals }) => {
  const userId = locals.user.id;
  return {
    userId
  };
};
export {
  load
};
