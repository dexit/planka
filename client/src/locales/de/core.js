import dateFns from 'date-fns/locale/de';

export default {
  dateFns,

  format: {
    date: 'd/M/yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'MMM d',
    longDateTime: "d MMMM 'at' p",
  },

  translation: {
    common: {
      account: 'Konto',
      actions: 'Aktionen',
      addAttachment_title: 'Anhang hinzufügen',
      addComment: 'Kommentar hinzufügen',
      addManager_title: 'Manager hinzufügen',
      addMember_title: 'Mitglied hinzufügen',
      addUser_title: 'Benutzer hinzufügen',
      administrator: 'Administrator',
      all: 'Alle',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Alle Änderungen werden automatisch gespeichert,<br />sobald die Verbindung wiederhergestellt wurde.',
      areYouSureYouWantToDeleteThisAttachment:
        'Sind Sie sicher, dass Sie diesen Anhang löschen möchten?',
      areYouSureYouWantToDeleteThisBoard: 'Sind Sie sicher, dass Sie dieses Board löschen möchten?',
      areYouSureYouWantToDeleteThisCard: 'Sind Sie sicher, dass Sie diese Karte löschen möchten?',
      areYouSureYouWantToDeleteThisComment:
        'Sind Sie sicher, dass Sie diesen Kommentar löschen möchten?',
      areYouSureYouWantToDeleteThisLabel: 'Sind Sie sicher, dass Sie dieses Label löschen möchten?',
      areYouSureYouWantToDeleteThisList: 'Sind Sie sicher, dass Sie diese Liste löschen möchten?',
      areYouSureYouWantToDeleteThisProject:
        'Sind Sie sicher, dass Sie dieses Projekt löschen möchten?',
      areYouSureYouWantToDeleteThisTask: 'Sind Sie sicher, dass Sie diese Aufgabe löschen möchten?',
      areYouSureYouWantToDeleteThisUser:
        'Sind Sie sicher, dass Sie diesen Benutzer löschen möchten?',
      areYouSureYouWantToLeaveBoard: 'Sind Sie sicher, dass Sie das Board verlassen möchten?',
      areYouSureYouWantToLeaveProject: 'Sind Sie sicher, dass Sie das Projekt verlassen möchten?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Sind Sie sicher, dass Sie diesen Manager aus dem Projekt entfernen möchten?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Sind Sie sicher, dass Sie dieses Mitglied aus dem Board entfernen möchten?',
      attachment: 'Anhang',
      attachments: 'Anhänge',
      authentication: 'Authentifizierung',
      background: 'Hintergrund',
      board: 'Board',
      boardNotFound_title: 'Board nicht gefunden',
      cardActions_title: 'Kartenaktionen',
      cardNotFound_title: 'Karte nicht gefunden',
      cardOrActionAreDeleted: 'Karte oder Aktion wurden gelöscht',
      color: 'Farbe',
      createBoard_title: 'Board erstellen',
      createLabel_title: 'Label erstellen',
      createNewOneOrSelectExistingOne: 'Ein Neues erstellen, oder <br />ein Bestehendes auswählen',
      createProject_title: 'Projekt erstellen',
      createTextFile_title: 'Textdatei erstellen',
      currentPassword: 'Derzeitiges Password',
      dangerZone_title: 'Gefährlicher Bereich',
      date: 'Datum',
      dueDate_title: 'Fälligkeitsdatum',
      deleteAttachment_title: 'Anhang löschen',
      deleteBoard_title: 'Board löschen',
      deleteCard_title: 'Karte löschen',
      deleteComment_title: 'Kommentar löschen',
      deleteLabel_title: 'Label löschen',
      deleteList_title: 'Liste löschen',
      deleteProject_title: 'Projekt löschen',
      deleteTask_title: 'Aufgabe löschen',
      deleteUser_title: 'Benutzer löschen',
      description: 'Beschreibung',
      detectAutomatically: 'Automatische Erkennung',
      dropFileToUpload: 'Datei ablegen, um hochzuladen',
      editAttachment_title: 'Anhang bearbieten',
      editAvatar_title: 'Avatar bearbeiten',
      editBoard_title: 'Board bearbeiten',
      editDueDate_title: 'Fälligkeitsdatum bearbeiten',
      editEmail_title: 'E-Mail bearbeiten',
      editLabel_title: 'Label bearbeiten',
      editPassword_title: 'Passwort ändern',
      editTimer_title: 'Timer bearbeiten',
      editUsername_title: 'Benutzername ändern',
      email: 'E-Mail',
      emailAlreadyInUse: 'E-Mail bereits in Verwendung',
      enterCardTitle: 'Kartentitel eingeben...',
      enterDescription: 'Beschreibung eingeben...',
      enterFilename: 'Dateiname eingeben',
      enterListTitle: 'Listentitel eingeben...',
      enterProjectTitle: 'Projekttitel eingeben',
      enterTaskDescription: 'Aufgabenbeschreibung eingeben...',
      filterByLabels_title: 'Nach Label filtern',
      filterByMembers_title: 'Nach Mitgliedern filtern',
      fromComputer_title: 'Vom Computer',
      general: 'Allgemein',
      hours: 'Stunden',
      invalidCurrentPassword: 'Das aktuelle Passwort ist falsch',
      labels: 'Labels',
      language: 'Sprache',
      leaveBoard_title: 'Board verlassen',
      leaveProject_title: 'Projekt verlassen',
      list: 'Listen',
      listActions_title: 'Aufgaben auflisten',
      managers: 'Manager',
      members: 'Mitglieder',
      minutes: 'Minuten',
      moveCard_title: 'Karte verschieben',
      name: 'Name',
      newEmail: 'Neue E-Mail',
      newPassword: 'Neues Passwort',
      newUsername: 'Neuer Benutzername',
      noConnectionToServer: 'Keine Verbindung zum Server',
      noBoards: 'Keine Boards',
      noLists: 'Keine Listen',
      noProjects: 'Keine Projekte',
      notifications: 'Benachrichtigungen',
      noUnreadNotifications: 'Keine ungelesenen Benachrichtigungen',
      openBoard_title: 'Board öffnen',
      optional_inline: 'Optional',
      organization: 'Organisation',
      phone: 'Telefon',
      preferences: 'Voreinstellungen',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Tipp: Drücken Sie STRG-V (Cmd-V auf Mac), um einen Anhang aus der Zwischenablage hinzuzufügen.',
      project: 'Projekt',
      projectNotFound_title: 'Projekt nicht gefunden',
      removeManager_title: 'Manager entfernen',
      removeMember_title: 'Mitglied entfernen',
      seconds: 'Sekunden',
      selectBoard: 'Board auswählen',
      selectList: 'Liste auswählen',
      selectProject: 'Projekt auswählen',
      settings: 'Einstellungen',
      subscribeToMyOwnCardsByDefault: 'Standardmäßig meine eigenen Karten abonnieren',
      taskActions_title: 'Aufgabenaktionen',
      tasks: 'Aufgaben',
      thereIsNoPreviewAvailableForThisAttachment: 'Für diesen Anhang ist keine Vorschau verfügbar',
      time: 'Zeit',
      timer: 'Timer',
      title: 'Titel',
      userActions_title: 'Benutzerraktionen',
      userAddedThisCardToList: '<0>{{user}}</0><1> hat diese Karte hinzugefügt zu {{list}}</1>',
      userLeftNewCommentToCard:
        '{{user}} hat einen neuen Kommentar verfasst «{{comment}}» to <2>{{card}}</2>',
      userMovedCardFromListToList:
        '{{user}} bewegte <2>{{card}}</2> von {{fromList}} nach {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> bewegte diese Karte von {{fromList}} nach {{toList}}</1>',
      username: 'Benutzername',
      usernameAlreadyInUse: 'Benutzername wird bereits verwendet',
      users: 'Benutzer',
      writeComment: 'Kommentar verfassen...',
    },

    action: {
      addAnotherCard: 'Eine weitere Karte hinzufügen',
      addAnotherList: 'Eine weitere Liste hinzufügen',
      addAnotherTask: 'Eine weitere Aufgabe hinzufügen',
      addCard: 'Karte hinzufügen',
      addCard_title: 'Karte hinzufügen',
      addComment: 'Kommentar hinzufügen',
      addList: 'Liste hinzufügen',
      addMoreDetailedDescription: 'Eine detaillierte Beschreibung hinzufügen',
      addTask: 'Aufgabe hinzufügen',
      addToCard: 'Zu Karte hinzufügen',
      addUser: 'Benutzer hinzufügen',
      createBoard: 'Board erstellen',
      createFile: 'Datei erstellen',
      createLabel: 'Label erstellen',
      createNewLabel: 'Neues Label erstellen',
      createProject: 'Projekt erstellen',
      delete: 'Löschen',
      deleteAttachment: 'Anhang löschen',
      deleteAvatar: 'Avatar löschen',
      deleteBoard: 'Board löschen',
      deleteCard: 'Karte löschen',
      deleteCard_title: 'Karte löschen',
      deleteComment: 'Kommentar löschen',
      deleteImage: 'Bild löschen',
      deleteLabel: 'Label löschen',
      deleteList: 'Liste löschen',
      deleteList_title: 'Liste löschen',
      deleteProject: 'Projekt löschen',
      deleteProject_title: 'Projekt löschen',
      deleteTask: 'Aufgabe löschen',
      deleteTask_title: 'Aufgabe löschen',
      deleteUser: 'Benutzer löschen',
      edit: 'Bearbeiten',
      editDueDate_title: 'Fälligkeitsdatum bearbeiten',
      editDescription_title: 'Beschreibung ändern',
      editEmail_title: 'E-Mail bearbeiten',
      editPassword_title: 'Passwort ändern',
      editTimer_title: 'Timer bearbeiten',
      editTitle_title: 'Titel bearbeiten',
      editUsername_title: 'Benutzername ändern',
      hideDetails: 'Details ausblenden',
      leaveBoard: 'Board verlassen',
      leaveProject: 'Projekt verlassen',
      logOut_title: 'Ausloggen',
      makeCover_title: 'als Vorschau festlegen',
      move: 'Verschieben',
      moveCard_title: 'Karte bewegen',
      remove: 'Löschen',
      removeBackground: 'Hintergrund löschen',
      removeCover_title: 'Vorschau löschen',
      removeFromBoard: 'Vom Board entfernen',
      removeFromProject: 'Vom Projekt entfernen',
      removeManager: 'Manager entfernen',
      removeMember: 'Mitglied entfernen',
      save: 'Speichern',
      showAllAttachments: 'Alle Anhänge anzeigen ({{hidden}} versteckt)',
      showDetails: 'Details anzeigen',
      showFewerAttachments: 'Weniger Anhänge anzeigen',
      start: 'Start',
      stop: 'Stopp',
      subscribe: 'Abonnieren',
      unsubscribe: 'Deabonnieren',
      uploadNewAvatar: 'Neuen Avatar hochladen',
      uploadNewImage: 'Neues Bild hochladen',
    },
  },
};
