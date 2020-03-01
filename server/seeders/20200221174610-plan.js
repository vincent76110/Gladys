module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      't_plan',
      [
        {
          id: '3a30636c-b3f0-4251-a347-90787f0fe941',
          house_id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
          room_id: '2398c689-8b47-43cc-ad32-e98d9be098b5',
          name: 'Test plan',
          selector: 'test-plan',
          picture:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALCwsMCxAMDBAXDw0PFxoUEBAUGh4XFxcXFx4dFxoZGRoXHR0jJCYkIx0vLzIyLy9AQEBAQEBAQEBAQEBAQED/2wBDAREPDxETERUSEhUUERMRFBkUFRUUGSUZGRsZGSUvIh0dHR0iLyotJiYmLSo0NC8vNDRAQD5AQEBAQEBAQEBAQED/wAARCAAFAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAABBAEFAAAAAAAAAAAAAAASAAEDEQITFSExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAADGSk//aAAwDAQACEQMRAD8AjjvOpI7PMdRk1YkQSDzd134iIgpluaP/2Q==',
          created_at: '2020-02-21 17:46:10.556 +00:00',
          updated_at: '2020-02-21 17:46:10.556 +00:00',
        },
      ],
      {},
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_plan', null, {}),
};
