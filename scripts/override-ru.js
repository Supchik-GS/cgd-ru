Hooks.once("i18nInit", async () => {
  if (game.system.id !== "coriolis-tgd") return;
  if (game.i18n.lang !== "ru") return;

  try {
    const response = await fetch("modules/cgd-ru/lang/ru.json", {
      cache: "no-cache"
    });

    if (!response.ok) {
      console.error(`cgd-ru | Не удалось загрузить lang/ru.json: ${response.status}`);
      return;
    }

    const translations = await response.json();

    foundry.utils.mergeObject(game.i18n.translations, translations, {
      inplace: true,
      overwrite: true
    });

    console.log("cgd-ru | Перевод Coriolis: The Great Dark применён поверх ru-ru");
  } catch (error) {
    console.error("cgd-ru | Ошибка применения перевода:", error);
  }
});