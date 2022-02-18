
import createInstance from './instance'
const instance = createInstance();
async function example() {
  await instance.ready();

  const app = instance.Application;

  // 添加书签
  await app.ActiveDocument.Bookmarks.Add({
    Name: 'WebOffice',
    Range: {
      Start: 1,
      End: 10,
    },
  });

  // 获取所有书签
  const bookmarks = await app.ActiveDocument.Bookmarks.Json();
  console.log(bookmarks);
}
example()
