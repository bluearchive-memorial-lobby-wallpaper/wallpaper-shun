import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-shun",
  slug: "shun",
  title: "Shun",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 5.333333492279053,
    "lines": [
      {
        "id": "shun_memoriallobby_1",
        "text": {
          "zh-cn": "哎呀，你醒啦。",
          "ja": "あら、\nお目覚めになりましたか。",
          "ko": "어머, 일어나셨군요.",
          "en": "Goodness. You're awake."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 7.000000476837158,
    "lines": [
      {
        "id": "shun_memoriallobby_2",
        "text": {
          "zh-cn": "今天……我真的感觉非常开心。呵呵。",
          "ja": "今日は…\n本当に楽しかったです。\nふふ。",
          "ko": "오늘은… 정말 즐거웠어요.\n후후.",
          "en": "Today...was quite enjoyable. Heehee."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 11.666666984558105,
    "lines": [
      {
        "id": "shun_memoriallobby_3_1",
        "text": {
          "zh-cn": "哎呀，现在这个时间，孩子们已经快要回来了吧。",
          "ja": "あら、もう子供たちが\n帰ってくる時間ですね。",
          "ko": "어머,\n아이들이 돌아올 시간이네요.",
          "en": "Oh, dear. It's time for the children to come in."
        }
      },
      {
        "id": "shun_memoriallobby_3_2",
        "text": {
          "zh-cn": "您是不是差不多也应该回去工作了呢……",
          "ja": "そろそろお仕事にお\n戻りになった方が\n良いのでは…。",
          "ko": "슬슬 돌아가 보셔야 하지\n않으시겠어요?",
          "en": "Should you head back now?"
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 13.666666984558105,
    "lines": [
      {
        "id": "shun_memoriallobby_4_1",
        "text": {
          "zh-cn": "啊。要不然……还是在这儿多放松一会儿吧，老师。",
          "ja": "いえ、やはり…ふふ、\nもう少しゆっくりしていて\nください、先生。",
          "ko": "아니… 후훗,\n좀 더 쉬세요, 선생님.",
          "en": "No...heehee. You should rest a little more, Sensei."
        }
      },
      {
        "id": "shun_memoriallobby_4_2",
        "text": {
          "zh-cn": "今天的工作我会替您完成的。",
          "ja": "今日の授業は\n私が代わりますので。",
          "ko": "오늘 수업은 제가 대신 할게요.",
          "en": "Don't worry about today's class... I'll substitute for you."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 8,
    "lines": [
      {
        "id": "shun_memoriallobby_5",
        "text": {
          "zh-cn": "啊……真是可爱……",
          "ja": "ああ…可愛い…\nふふっ。",
          "ko": "아아… 귀여워라…\n후훗.",
          "en": "Aw... You're so cute. Heehee."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
