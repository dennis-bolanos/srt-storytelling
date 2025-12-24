// Author to avatar mapping
// Using UI Avatars service to generate unique avatars for each author
// Format: https://ui-avatars.com/api/?name={name}&size=128&background={color}&color={textColor}

const authorAvatarMap = {
  'Elias Thompson': 'https://i.pravatar.cc/150?img=1',
  'Sofia Martinez': 'https://i.pravatar.cc/150?img=5',
  'Lucas Chen': 'https://i.pravatar.cc/150?img=9',
  'Alex Rivera': 'https://i.pravatar.cc/150?img=12',
  'Maria Santos': 'https://i.pravatar.cc/150?img=15',
  'James Wilson': 'https://i.pravatar.cc/150?img=20',
  'Emma Davis': 'https://i.pravatar.cc/150?img=24',
  'Michael Brown': 'https://i.pravatar.cc/150?img=27',
  'Sarah Johnson': 'https://i.pravatar.cc/150?img=33',
  'David Lee': 'https://i.pravatar.cc/150?img=36',
  'Lisa Anderson': 'https://i.pravatar.cc/150?img=39',
  'Jennifer White': 'https://i.pravatar.cc/150?img=44',
  'Thomas Green': 'https://i.pravatar.cc/150?img=47',
  'Patricia Taylor': 'https://i.pravatar.cc/150?img=51',
  'Christopher Moore': 'https://i.pravatar.cc/150?img=54',
  'Amanda Clark': 'https://i.pravatar.cc/150?img=57',
  'Rachel Foster': 'https://i.pravatar.cc/150?img=60',
  'Kevin Mitchell': 'https://i.pravatar.cc/150?img=63',
  'Nicole Adams': 'https://i.pravatar.cc/150?img=66',
  'Brian Thompson': 'https://i.pravatar.cc/150?img=69',
  'Stephanie Wright': 'https://i.pravatar.cc/150?img=72'
}

export function getAuthorAvatar(authorName) {
  return authorAvatarMap[authorName] || 'https://i.pravatar.cc/150?img=1'
}

